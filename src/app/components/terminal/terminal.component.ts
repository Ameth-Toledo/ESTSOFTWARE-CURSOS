import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent {
  currentPath: string = '/home/ubuntu';
  inputCommand: string = '';
  outputLines: string[] = [];
  fileSystem: { [key: string]: { content: string[]; permissions: string } } = {
    '/home/ubuntu': { content: ['Documentos', 'Escritorio', 'Música'], permissions: 'drwxr-xr-x' },
    '/home/ubuntu/Documentos': { content: [], permissions: 'drwxr-xr-x' },
    '/home/ubuntu/Escritorio': { content: [], permissions: 'drwxr-xr-x' },
    '/home/ubuntu/Música': { content: [], permissions: 'drwxr-xr-x' },
  };
  users: { [key: string]: string } = { root: 'root', ubuntu: 'ubuntu' };
  currentUser: string = 'ubuntu';
  sudoPassword: string = 'est2025';
  sudoAuth: boolean = false;
  waitingForPassword: boolean = false;
  passwordInput: string = ''; 

  processCommand() {
    const command = this.inputCommand.trim();
    this.outputLines.push(`${this.currentPath}$ ${command}`);
  
    if (command.startsWith('sudo') && !this.sudoAuth && !this.waitingForPassword) {
      this.outputLines.push('[sudo] password for ubuntu:');
      this.waitingForPassword = true; 
    } else {
      if (this.waitingForPassword) {
        this.outputLines.push('Debes autenticar primero.');
      } else {
        const [cmd, ...args] = command.split(' ');
        switch (cmd) {
          case 'ls':
            this.executeLs(args);
            break;
          case 'pwd':
            this.outputLines.push(this.currentPath);
            break;
          case 'cd':
            this.executeCd(args[0]);
            break;
          case 'mkdir':
            this.executeMkdir(args[0]);
            break;
          case 'rmdir':
            this.executeRmdir(args[0]);
            break;
          case 'chmod':
            this.executeChmod(args[0], args[1]);
            break;
          case 'ls -l':
            this.executeLsL();
            break;
          case 'touch':
            this.executeTouch(args[0]);
            break;
          case 'rm':
            this.executeRm(args[0]);
            break;
          case 'cat':
            this.outputLines.push(`cat: ${args[0]}: No se implementó el contenido.`);
            break;
          case 'whoami':
            this.outputLines.push(this.currentUser);
            break;
          case 'clear':
            this.outputLines = [];
            break;
          default:
            this.outputLines.push(`Comando no encontrado: ${command}`);
        }
      }
    }
    this.inputCommand = '';
  }

  onPasswordInput(event: Event): void {
    const keyboardEvent = event as KeyboardEvent; 
    if (keyboardEvent.key === 'Enter' && this.waitingForPassword) {
      if (this.passwordInput === this.sudoPassword) {
        this.sudoAuth = true;
        this.outputLines.push('Contraseña correcta.');
        this.waitingForPassword = false; 
        this.executeCommandAfterAuth();
      } else {
        this.outputLines.push('Contraseña incorrecta.');
        this.waitingForPassword = false;
      }
    }
  }
  
  executeCommandAfterAuth() {
    const command = this.inputCommand.trim();
    this.processCommand(); 
  }

  executeLs(args: string[]) {
    const targetPath = this.currentPath;
    const files = this.fileSystem[targetPath]?.content || [];
    this.outputLines.push(files.join('    ') || 'Este directorio está vacío.');
  }

  executeLsL() {
    const targetPath = this.currentPath;
    const entries = this.fileSystem[targetPath]?.content || [];
    entries.forEach(entry => {
      const path = targetPath + '/' + entry;
      const permissions = this.fileSystem[path]?.permissions || 'drwxr-xr-x';
      this.outputLines.push(`${permissions} ${entry}`);
    });
  }

  executeCd(path: string) {
    if (!path || path === '~') {
      this.currentPath = '/home/ubuntu';
    } else if (path === '..') {
      if (this.currentPath !== '/home/ubuntu') {
        this.currentPath = this.currentPath.substring(0, this.currentPath.lastIndexOf('/')) || '/home/ubuntu';
      }
    } else {
      const newPath = this.currentPath + '/' + path;
      if (this.fileSystem[newPath]) {
        this.currentPath = newPath;
      } else {
        this.outputLines.push(`cd: No existe el directorio: ${path}`);
      }
    }
  }

  executeMkdir(directory: string) {
    const newPath = this.currentPath + '/' + directory;
    if (!directory) {
      this.outputLines.push('mkdir: Falta el nombre del directorio.');
    } else if (this.fileSystem[newPath]) {
      this.outputLines.push(`mkdir: El directorio '${directory}' ya existe.`);
    } else {
      this.fileSystem[newPath] = { content: [], permissions: 'drwxr-xr-x' };
      this.fileSystem[this.currentPath]?.content.push(directory);
    }
  }

  executeRmdir(directory: string) {
    const targetPath = this.currentPath + '/' + directory;
    if (!directory || !this.fileSystem[targetPath]) {
      this.outputLines.push(`rmdir: El directorio '${directory}' no existe.`);
    } else if (this.fileSystem[targetPath].content.length > 0) {
      this.outputLines.push(`rmdir: El directorio '${directory}' no está vacío.`);
    } else {
      delete this.fileSystem[targetPath];
      this.fileSystem[this.currentPath].content = this.fileSystem[this.currentPath].content.filter(dir => dir !== directory);
    }
  }

  executeChmod(permissions: string, file: string) {
    const targetPath = this.currentPath + '/' + file;
    if (!this.fileSystem[targetPath]) {
      this.outputLines.push(`chmod: No se encuentra '${file}'`);
    } else {
      this.fileSystem[targetPath].permissions = permissions;
      this.outputLines.push(`Permisos de '${file}' cambiados a '${permissions}'.`);
    }
  }

  executeTouch(file: string) {
    const targetPath = this.currentPath + '/' + file;
    if (!file) {
      this.outputLines.push('touch: Falta el nombre del archivo.');
    } else {
      this.fileSystem[targetPath] = { content: [], permissions: '-rw-r--r--' };
      this.fileSystem[this.currentPath]?.content.push(file);
      this.outputLines.push(`Archivo '${file}' creado.`);
    }
  }

  executeRm(file: string) {
    const targetPath = this.currentPath + '/' + file;
    if (!this.fileSystem[targetPath]) {
      this.outputLines.push(`rm: No se encuentra '${file}'`);
    } else {
      delete this.fileSystem[targetPath];
      this.fileSystem[this.currentPath].content = this.fileSystem[this.currentPath].content.filter(f => f !== file);
      this.outputLines.push(`Archivo '${file}' eliminado.`);
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationHumanReadable',
})
export class DurationHumanReadablePipe implements PipeTransform {
  transform(milliseconds: number): string {
    if (milliseconds < 1000) {
      return `${milliseconds}ms`;
    }

    const seconds = Math.floor(milliseconds / 1000);
    if (seconds < 60) {
      return `${seconds}s`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes}m ${seconds % 60}s`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours}h ${minutes % 60}m`;
    }

    const days = Math.floor(hours / 24);
    return `${days}d ${hours % 24}h`;
  }
}

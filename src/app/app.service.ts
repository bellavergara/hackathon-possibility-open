import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getPort(): number {
    // Obtiene la variable PORT desde el .env
    return this.configService.get<number>('PORT', 3000); // Usa 3000 como valor predeterminado si PORT no está definido
  }

  getDatabaseUrl(): string {
    // Si quieres usar la URL completa de la base de datos
    return this.configService.get<string>('DATABASE_URL', '');
  }
}

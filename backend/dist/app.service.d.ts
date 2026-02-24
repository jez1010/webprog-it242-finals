import { ConfigService } from '@nestjs/config';
export declare class AppService {
    private configService;
    private supabase;
    constructor(configService: ConfigService);
    getPostData(): Promise<any[]>;
    createPost(in_name: string, in_content: string): Promise<null>;
    getProjects(): Promise<any[]>;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const supabase_js_1 = require("@supabase/supabase-js");
let AppService = class AppService {
    configService;
    supabase;
    constructor(configService) {
        this.configService = configService;
        const url = this.configService.get('SUPABASE_URL');
        const key = this.configService.get('SUPABASE_KEY');
        this.supabase = (0, supabase_js_1.createClient)(url, key);
    }
    async getPostData() {
        const { data, error } = await this.supabase
            .schema('webprog_stuff')
            .from('board_post')
            .select('*')
            .order('created_at', { ascending: false });
        if (error)
            throw error;
        return data;
    }
    async createPost(in_name, in_content) {
        const { data, error } = await this.supabase
            .schema('webprog_stuff')
            .from('board_post')
            .insert([
            {
                name: in_name,
                content: in_content,
            }
        ]);
        if (error)
            throw error;
        return data;
    }
    async getProjects() {
        const { data, error } = await this.supabase
            .schema('webprog_stuff')
            .from('projects')
            .select('*')
            .order('id', { ascending: true });
        if (error)
            throw error;
        return data;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppService);
//# sourceMappingURL=app.service.js.map
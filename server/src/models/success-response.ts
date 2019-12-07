export class SuccessResponse {
    data: any;
    status: number;
    message: string;

    constructor(data: any, message = '', status = 200) {
        this.data = data;
        this.message = message;
        this.status = status;
    }
}
export class ErrorResponse {
    errors: any;
    message: string;
    status: number;

    constructor(errors: any, message: string, status = 400) {
        this.errors = errors;
        this.message = message;
        this.status = status;
    }
}
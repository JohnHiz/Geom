import { ErrorResponse } from "./Error.types";

export const errorCheck = (error: any): error is ErrorResponse => {
    return "data" in error && "status" in error && "statusText" in error;
};

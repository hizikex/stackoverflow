export enum Errors {
    NOT_AUTHENTICATED = 'REQUEST NOT AUTHENTICATED',
    NOT_AUTHORIZED = 'REQUEST NOT AUTHORIZED',
    BAD_REQUEST = 'INVALID REQUEST DATA',
    CONFLICT = 'REQUEST COULD NOT BE COMPLETED DUE TO CONFLICT',
    NOT_IMPLEMENTED = 'FUNCTIONALITY NOT SUPPORTED',
    SERVER_ERROR = 'INTERNAL SERVER ERROR',
    VALIDATION = 'DATA PROVIDED IS INVALID',
    RESOURCE_NOT_FOUND = 'RESOURCE NOT FOUND',
    INVALID_AUTHORIZATION_TOKEN = 'INVALID AUTHORIZATION TOKEN',
    SERVICE_UNAVAILABLE = 'SERVICE UNAVAILABLE'
}

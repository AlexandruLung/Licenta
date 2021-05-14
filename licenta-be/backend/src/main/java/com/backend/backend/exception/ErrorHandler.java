package com.backend.backend.exception;
import lombok.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@SuppressWarnings("serial")
@RestControllerAdvice
public class ErrorHandler extends Exception {

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ExceptionRestResponse handleCustomException(Exception exception) {
        return new ExceptionRestResponse(500, exception.getMessage());
    }

    @Value
    public static class ExceptionRestResponse {
        int code;
        String message;
    }
} 
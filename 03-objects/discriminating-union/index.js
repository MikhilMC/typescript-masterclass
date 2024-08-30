"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(state) {
    switch (state.state) {
        case "loading":
            return "Loading...";
        case "failed":
            return `Error ${state.code}`;
        case "success":
            return `Downloading ${state.response.title}`;
        default:
            break;
    }
}

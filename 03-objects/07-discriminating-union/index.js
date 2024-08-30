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
export {};

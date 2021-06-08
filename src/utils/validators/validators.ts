export const requiredField = (value: string) => {
    if (value) return undefined;
    return "Field is required";
};

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    return value && value.length > maxLength
        ? `Max length is ${maxLength} symbols`
        : undefined;
};

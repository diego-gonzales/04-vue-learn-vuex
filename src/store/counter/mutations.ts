

export const increment = (state: any) => {
    state.count++;
    state.message = 'Increment Mutation';
}

export const incrementBy = (state: any, value: number) => {
    state.count += value;
    state.message = 'IncrementBy Mutation';
    state.randomNumber = value;
}

export const setLoading = (state: any, value: boolean) => {
    state.isLoading = value;
}
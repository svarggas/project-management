import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInitialState {
    user: Record<string, any> | null | undefined;
}

const initialState = {
    user: null
} as UserInitialState;

interface SignInArgs {
    user: UserInitialState["user"]
}

export const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<SignInArgs>) => {
            const { user } = action.payload;
            state.user = user;
        },
        signOut: (state) => {
            state.user = null;
        },
    },
});

export const { signIn, signOut } = user.actions;
export default user.reducer;
import {
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
    TypedUseSelectorHook,
} from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = useAppDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

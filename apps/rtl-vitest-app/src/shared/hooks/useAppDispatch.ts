// src/hooks/useAppDispatch.ts
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../features/auth/stores'

export const useAppDispatch = () => useDispatch<AppDispatch>()

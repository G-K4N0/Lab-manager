'use client'
interface ErrorMessageProps {
  message: string,
  visible: boolean
}

export default function ErrorMessage({ message, visible }: ErrorMessageProps) {
    if (!visible) return null
    return (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm animante-pulse rounded">
            {message}
        </div>
    )
}
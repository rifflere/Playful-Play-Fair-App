export type ProcessResult = 
| { isValid: false; error: string }
| { isValid: true; processedText: string };
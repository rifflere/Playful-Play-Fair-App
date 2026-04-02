import EncryptColumn from './EncryptColumn';
import ArrangeColumn from './ArrangeColumn';
import DecryptColumn from './DecryptColumn';

interface ColumnProps {
  role: 'input' | 'arrange' | 'output';
  mode: 'encrypt' | 'decrypt';
  text: string;
  setText: (key: string) => void;
  fullGrid: string[];
  setCipherKey: (key: string[]) => void;
  cipherKey: string[];
}

function Column({ role, mode, text, setText, fullGrid, setCipherKey, cipherKey }: ColumnProps) {
  return (
    <>
    {role === "input" && mode === "encrypt" && <EncryptColumn encryptText={text} setEncryptText={setText} />}
    {role === "arrange" && <ArrangeColumn fullGrid={fullGrid} setCipherKey={setCipherKey} cipherKey={cipherKey} />}
    {role === "output" && <DecryptColumn decryptText={text} setDecryptText={setText} />}
    </>
  );
}

export default Column;
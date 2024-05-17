interface CatQualityInputProps {
   labelName: string;
   name: string;
   value: number;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CatQualityInput: React.FC<CatQualityInputProps> = ({
   labelName,
   name,
   value,
   onChange,
}) => {
   return (
      <li key={name} className="cat-quality">
         <label className="cat-quality-input">
            {labelName}
            <input
               type="range"
               id={name}
               name={name}
               min="1"
               max="5"
               value={value}
               step="1"
               onChange={onChange}
            />
         </label>
      </li>
   );
};

export default CatQualityInput;

import { useRef } from "react";
import classNames from "../../consts/classNames";

interface Numberprops {
  value?: number;
  min?: number;
  onChange?: any;
  max?: number;
}

const Number = (props: Numberprops) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { value, min = 0, max, onChange } = props;
  const handleValue = (delta: number) => {
    if (ref.current) {
      let currentValue = parseInt(ref.current.value) || 0; // Default to 0 if NaN
      // Update the value based on the delta (increment or decrement)
      const newValue = currentValue + delta;
      // Call the onChange function with the new value
      ref.current.value = newValue.toString();
      if (onChange) {
        onChange(newValue); // Call the onChange function with the new value
      }
    }
  };
  return (
    <div className={`flex items-center justify-start gap-1`}>
      <button
        className="w-6 h-6 flex-shrink-0 rounded-full bg-indigo-600 hover:hg-indigo-500"
        onClick={() => handleValue(-1)}
      >
        -
      </button>
      <input
        type="number"
        className={`text-center min-w-16 border-0 text-sm py-1 w-full rounded-md bg-indigo-950`}
        min={min}
        ref={ref}
        value={value}
        onChange={(e) => {
          const newValue = parseInt(e.target.value) || 0; // Handle NaN
          if (onChange) {
            onChange(newValue); // Call onChange with the new value
          }
        }}
      />
      <button
        className="w-6 h-6 flex-shrink-0 rounded-full bg-indigo-600 hover:hg-indigo-500"
        onClick={() => handleValue(1)}
      >
        +
      </button>
    </div>
  );
};
export default Number;

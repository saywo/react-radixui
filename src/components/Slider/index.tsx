import { useState } from "react";
import * as RadixSlider from "@radix-ui/react-slider";

export const Slider = () => {
  const [rangeValue, setRangeValue] = useState(5000);
  const min = 3000;
  const max = 21350;
  /** classNameは使ってるので消さないよう注意 */
  return (
    <div>
      <form
        onChange={(e) => {
          // Input要素以外の場合は終了
          if (!(e.target instanceof HTMLInputElement)) {
            return;
          }
          setRangeValue(Number(e.target.value));
        }}
      >
        <RadixSlider.Root
          className="SliderRoot"
          defaultValue={[rangeValue]}
          min={min}
          max={max}
          step={1}
          aria-label="Volume"
        >
          <RadixSlider.Track className="SliderTrack">
            <RadixSlider.Range className="SliderRange" />
          </RadixSlider.Track>
          <RadixSlider.Thumb className="SliderThumb" />
        </RadixSlider.Root>
        <div>min:{min}</div>
        <div>current:{rangeValue}</div>
        <div>max:{max}</div>
      </form>
      <button onClick={() => console.log(rangeValue)}>
        rangeValueをconsole
      </button>
    </div>
  );
};

import { StoneSettings } from "../SvgTemplate";
import styles from "./Settings.module.css";
interface Props {
  settings: StoneSettings;
  changeVal(key: string, value: any): void;
}

const StoneForm: React.FC<Props> = ({ settings, changeVal }) => {
  return (
    <div>
      <div className={styles.inputGroup}>
        <label>turbulence type</label>
        <select
          onChange={(e) => {
            changeVal("turbType", e.target.value);
          }}
          value={settings.turbType}
        >
          <option value="turbulence">turbulence</option>
          <option value="fractalNoise">fractalNoise</option>
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label>turbulence frequency x — {settings.turbFreqX}</label>
        <input
          onChange={(e) => {
            changeVal("turbFreqX", e.target.value);
          }}
          type="range"
          min="0"
          max="0.1"
          step="0.001"
          value={settings.turbFreqX}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>turbulence frequency y — {settings.turbFreqY}</label>
        <input
          onChange={(e) => {
            changeVal("turbFreqY", e.target.value);
          }}
          type="range"
          min="0"
          max="0.1"
          step="0.001"
          value={settings.turbFreqY}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>turbulence octave — {settings.turbOct}</label>
        <input
          onChange={(e) => {
            changeVal("turbOct", e.target.value);
          }}
          type="range"
          min="1"
          max="10"
          value={settings.turbOct}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>red amp — {settings.redAmp}</label>
        <input
          onChange={(e) => {
            changeVal("redAmp", e.target.value);
          }}
          type="range"
          min="-1"
          max="1"
          step="0.01"
          value={settings.redAmp}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>red exp — {settings.redExp}</label>
        <input
          onChange={(e) => {
            changeVal("redExp", e.target.value);
          }}
          type="range"
          min="-1"
          max="1"
          step="0.01"
          value={settings.redExp}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>red off — {settings.redOff}</label>
        <input
          onChange={(e) => {
            changeVal("redOff", e.target.value);
          }}
          type="range"
          min="-1"
          max="1"
          step="0.01"
          value={settings.redOff}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>green amp — {settings.greenAmp}</label>
        <input
          onChange={(e) => {
            changeVal("greenAmp", e.target.value);
          }}
          type="range"
          value={settings.greenAmp}
          min="-1"
          max="1"
          step="0.01"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>green exp — {settings.greenExp}</label>
        <input
          onChange={(e) => {
            changeVal("greenExp", e.target.value);
          }}
          type="range"
          value={settings.greenExp}
          min="-1"
          max="1"
          step="0.01"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>green off — {settings.greenOff}</label>
        <input
          onChange={(e) => {
            changeVal("greenOff", e.target.value);
          }}
          type="range"
          value={settings.greenOff}
          min="-1"
          max="1"
          step="0.01"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>blue amp — {settings.blueAmp}</label>
        <input
          onChange={(e) => {
            changeVal("blueAmp", e.target.value);
          }}
          type="range"
          value={settings.blueAmp}
          min="-1"
          max="1"
          step="0.01"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>blue exp — {settings.blueExp}</label>
        <input
          onChange={(e) => {
            changeVal("blueExp", e.target.value);
          }}
          type="range"
          value={settings.blueExp}
          min="-1"
          max="1"
          step="0.01"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>blue off — {settings.blueOff}</label>
        <input
          onChange={(e) => {
            changeVal("blueOff", e.target.value);
          }}
          type="range"
          value={settings.blueOff}
          min="-1"
          max="1"
          step="0.01"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>rotation — {settings.rotation}</label>
        <input
          onChange={(e) => {
            changeVal("rotation", e.target.value);
          }}
          type="range"
          value={settings.rotation}
          min="0"
          max="360"
          step="1"
        />
      </div>
    </div>
  );
};

export default StoneForm;
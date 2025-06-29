'use client';

import styles from '@/styles/input.module.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function Input({ value, onChange, error }: Props) {
  return (
    <div className={styles.inputWrapper}>
      <input
      dir='rtl'
        type="tel"
        placeholder="شماره تلفن"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

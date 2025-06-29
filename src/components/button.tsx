'use client';

import styles from '@/styles/button.module.scss';

type Props = {
  label: string;
  onClick: () => void;
  loading?: boolean;
};

export default function Button({ label, onClick, loading = false }: Props) {
  return (
    <button className={styles.btn} onClick={onClick} disabled={loading}>
      {loading ? (
          <span> در حال ورود...</span>
      ) : (
        label
      )}
    </button>
  );
}

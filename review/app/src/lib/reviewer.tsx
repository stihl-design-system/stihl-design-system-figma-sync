import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { NameDialog } from '../components/Dialogs.tsx';
import { useStored } from './useStored.ts';

interface Reviewer {
  /** Name saved with every decision; empty until the reviewer has entered one */
  name: string;
  /** Runs the action with the name, asking for it first when it is unknown */
  withName: (action: (name: string) => void) => void;
  changeName: () => void;
}

const ReviewerContext = createContext<Reviewer | null>(null);

/** The login is shared by the team, so the page keeps the name of the person in this browser */
export function ReviewerProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useStored('review.reviewer', '');
  const [asking, setAsking] = useState(false);
  /** What the reviewer wanted to do when the page had to ask for the name first */
  const pending = useRef<((name: string) => void) | null>(null);

  const withName = useCallback(
    (action: (name: string) => void) => {
      if (name) {
        action(name);
      } else {
        pending.current = action;
        setAsking(true);
      }
    },
    [name]
  );
  const changeName = useCallback(() => setAsking(true), []);
  const value = useMemo(
    () => ({ name, withName, changeName }),
    [name, withName, changeName]
  );

  return (
    <ReviewerContext.Provider value={value}>
      {children}
      <NameDialog
        isOpen={asking}
        current={name}
        onClose={() => {
          pending.current = null;
          setAsking(false);
        }}
        onSave={(saved) => {
          setName(saved);
          setAsking(false);
          pending.current?.(saved);
          pending.current = null;
        }}
      />
    </ReviewerContext.Provider>
  );
}

export function useReviewer(): Reviewer {
  const reviewer = useContext(ReviewerContext);
  if (!reviewer) {
    throw new Error('useReviewer needs a ReviewerProvider');
  }
  return reviewer;
}

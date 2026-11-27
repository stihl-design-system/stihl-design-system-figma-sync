import {
  DSButton,
  DSDialog,
  DSHeading,
  DSInput,
  DSText,
  DSTextarea,
} from '@stihl-design-system/components';
import { useEffect, useState } from 'react';
import styles from './Dialogs.module.scss';

interface NameDialogProps {
  isOpen: boolean;
  /** The name saved so far; empty when the page asks for the first time */
  current: string;
  onSave: (name: string) => void;
  onClose: () => void;
}

/** The login is shared, so the page asks who is deciding; the name can be changed later */
export function NameDialog({
  isOpen,
  current,
  onSave,
  onClose,
}: NameDialogProps) {
  const [name, setName] = useState(current);
  const [invalid, setInvalid] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setName(current);
      setInvalid(false);
    }
  }, [isOpen, current]);

  return (
    <DSDialog
      isOpen={isOpen}
      onClose={onClose}
      header={
        <DSHeading tag='h2' size='small'>
          {current ? 'Change your name' : 'Who is reviewing?'}
        </DSHeading>
      }
      footer={
        <DSButton type='submit' form='reviewer-form'>
          Save name
        </DSButton>
      }
    >
      <form
        id='reviewer-form'
        className={styles.form}
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          if (name.trim()) {
            onSave(name.trim());
          } else {
            setInvalid(true);
          }
        }}
      >
        <DSText size='small'>
          The login is shared by the team. Your name is saved with every
          decision, so others know who to ask.
          {current &&
            ' Decisions you already made keep the name they were saved with.'}
        </DSText>
        <DSInput
          id='reviewer-name'
          label='Your name'
          value={name}
          maxLength={80}
          autoComplete='name'
          required
          invalid={invalid}
          systemFeedback='Enter your name to continue'
          onChange={(event) => {
            setName(event.target.value);
            setInvalid(false);
          }}
        />
      </form>
    </DSDialog>
  );
}

interface RejectDialogProps {
  isOpen: boolean;
  /** What is being rejected, shown as context */
  subject: string;
  onReject: (comment: string) => void;
  onClose: () => void;
}

export function RejectDialog({
  isOpen,
  subject,
  onReject,
  onClose,
}: RejectDialogProps) {
  const [comment, setComment] = useState('');
  useEffect(() => {
    if (isOpen) {
      setComment('');
    }
  }, [isOpen]);

  return (
    <DSDialog
      isOpen={isOpen}
      onClose={onClose}
      header={
        <DSHeading tag='h2' size='small'>
          Reject this change
        </DSHeading>
      }
      footer={
        <div className={styles.actions}>
          <DSButton type='button' variant='outline' onClick={onClose}>
            Cancel
          </DSButton>
          <DSButton type='submit' form='reject-form'>
            Reject
          </DSButton>
        </div>
      }
    >
      <form
        id='reject-form'
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          onReject(comment.trim());
        }}
      >
        <DSText size='small'>{subject}</DSText>
        <DSTextarea
          id='reject-comment'
          label='What is wrong?'
          hint='Optional. The comment is sent with the result of the review.'
          value={comment}
          maxLength={2000}
          onChange={(event) => setComment(event.target.value)}
        />
      </form>
    </DSDialog>
  );
}

interface FinishDialogProps {
  isOpen: boolean;
  accepted: number;
  rejected: number;
  busy: boolean;
  onFinish: () => void;
  onClose: () => void;
}

export function FinishDialog({
  isOpen,
  accepted,
  rejected,
  busy,
  onFinish,
  onClose,
}: FinishDialogProps) {
  return (
    <DSDialog
      isOpen={isOpen}
      onClose={onClose}
      header={
        <DSHeading tag='h2' size='small'>
          Finish this review?
        </DSHeading>
      }
      footer={
        <div className={styles.actions}>
          <DSButton type='button' variant='outline' onClick={onClose}>
            Cancel
          </DSButton>
          <DSButton type='button' loading={busy} onClick={onFinish}>
            Finish review
          </DSButton>
        </div>
      }
    >
      <div className={styles.form}>
        <DSText>
          {rejected > 0
            ? `${accepted} accepted, ${rejected} rejected. The review closes with "Changes requested".`
            : `All ${accepted} changes accepted. The review closes as "Approved".`}
        </DSText>
        <DSText size='small'>
          The team is notified about the result. Decisions are locked until the
          review is reopened.
        </DSText>
      </div>
    </DSDialog>
  );
}

interface AcceptAllDialogProps {
  isOpen: boolean;
  count: number;
  documentTitle: string;
  busy: boolean;
  onAccept: () => void;
  onClose: () => void;
}

/** Accepting several changes at once skips looking at them, so it asks first */
export function AcceptAllDialog({
  isOpen,
  count,
  documentTitle,
  busy,
  onAccept,
  onClose,
}: AcceptAllDialogProps) {
  return (
    <DSDialog
      isOpen={isOpen}
      onClose={onClose}
      header={
        <DSHeading tag='h2' size='small'>
          Accept {count} changes in {documentTitle}?
        </DSHeading>
      }
      footer={
        <div className={styles.actions}>
          <DSButton type='button' variant='outline' onClick={onClose}>
            Cancel
          </DSButton>
          <DSButton type='button' loading={busy} onClick={onAccept}>
            Accept {count} changes
          </DSButton>
        </div>
      }
    >
      <DSText>
        All images and texts of this page that have no decision yet are accepted
        without opening them. Decisions you already made stay as they are.
      </DSText>
    </DSDialog>
  );
}

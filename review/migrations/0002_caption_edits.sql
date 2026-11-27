-- Figure descriptions edited on the review page. The workflow that applies them writes the
-- description into captions.json next to the image and marks the edit applied, or outdated when
-- the image changed since the review it was edited in.
CREATE TABLE caption_edits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  review_id TEXT NOT NULL REFERENCES reviews (id) ON DELETE CASCADE,
  image_id TEXT NOT NULL,
  -- The image at the newer commit of the review; the workflow checks it is still the same file
  path TEXT NOT NULL,
  head_sha TEXT NOT NULL,
  caption TEXT NOT NULL,
  editor TEXT NOT NULL,
  edited_at TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'applied', 'outdated')),
  applied_at TEXT,
  -- The commit on main that contains the description
  commit_sha TEXT
);

CREATE INDEX caption_edits_review ON caption_edits (review_id, image_id);
CREATE INDEX caption_edits_status ON caption_edits (status);

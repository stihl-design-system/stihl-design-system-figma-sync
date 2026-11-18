CREATE TABLE reviews (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  title TEXT NOT NULL,
  -- JSON: number of changed, added, removed and renamed images
  counts TEXT NOT NULL,
  -- images that need a decision (everything but renamed)
  total INTEGER NOT NULL,
  -- JSON: the manifest without its images
  header TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'approved', 'changes_requested')),
  finished_at TEXT,
  finished_by TEXT
);

CREATE INDEX reviews_created_at ON reviews (created_at DESC);

-- The images of a review as JSON arrays, split into parts to stay below the D1 row size
CREATE TABLE review_images (
  review_id TEXT NOT NULL REFERENCES reviews (id) ON DELETE CASCADE,
  part INTEGER NOT NULL,
  images TEXT NOT NULL,
  PRIMARY KEY (review_id, part)
);

CREATE TABLE decisions (
  review_id TEXT NOT NULL REFERENCES reviews (id) ON DELETE CASCADE,
  image_id TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('accepted', 'rejected')),
  comment TEXT NOT NULL DEFAULT '',
  reviewer TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (review_id, image_id)
);

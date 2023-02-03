import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import LastUpdated from "@theme/LastUpdated";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline from "@theme/TagsListInline";
import styles from "./styles.module.css";
import FeedbackFooter from "@site/src/components/feedback/FeedbackFooter";

function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        "row margin-bottom--sm",
      )}
    >
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <div
      className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, "row")}
      style={{ alignItems: "center" }}
    >
      <div className="col col--3">
        {editUrl && <EditThisPage editUrl={editUrl} />}
      </div>
      <div
        className={clsx("col col--9", styles.lastUpdated)}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <FeedbackFooter />
      </div>
    </div>
  );
}
export default function DocItemFooter() {
  const { metadata } = useDoc();
  const {
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    tags,
  } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
    >
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      {canDisplayEditMetaRow &&
        editUrl !==
          // TODO: this is bad - Hard code don't show the footer on the homepage
          "https://github.com/web3sdks/docs/edit/main/docs/onboarding/0 0 Home.mdx" && (
          <EditMetaRow
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
          />
        )}
    </footer>
  );
}

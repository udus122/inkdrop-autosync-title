"use babel";

import { actions } from "inkdrop";
import { CompositeDisposable } from "event-kit";

const copyTitle = () => {
  if (!inkdrop.isEditorActive()) {
    return;
  }
  const { editingNote } = inkdrop.store.getState();
  if (!editingNote) {
    throw new Error("editingNote is not found");
  }
  const { title, body } = editingNote;
  const match = body.match(/^# (?<header>.*)/);
  if (!title || match) {
    const { header } = match.groups;
    inkdrop.store.dispatch(actions.editingNote.update({ title: header }));
  } else {
    inkdrop.store.dispatch(
      actions.editingNote.update({ body: "# " + title + "\n\n" + body })
    );
  }
  inkdrop.store.dispatch(actions.editor.change(true));
};

const subscriptions = new CompositeDisposable();

export const activate = () => {
  const subscriptions = new CompositeDisposable();
  subscriptions.add(
    inkdrop.commands.add(document.body, {
      "core:save-note": () => {
        copyTitle();
      },
    })
  );
};

export const deactivate = () => {
  subscriptions.dispose();
};

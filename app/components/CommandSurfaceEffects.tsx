"use client";

import { useEffect } from "react";

export function CommandSurfaceEffects() {
  useEffect(() => {
    const commandButton = document.querySelector<HTMLButtonElement>("#command-button");
    const commandDialog = document.querySelector<HTMLDialogElement>("#command-dialog");
    const quietChaos = document.querySelector<HTMLButtonElement>("#quiet-chaos");

    if (!commandButton || !commandDialog) {
      return;
    }

    const syncExpandedState = () => {
      commandButton.setAttribute("aria-expanded", commandDialog.open ? "true" : "false");
    };

    const handleCommandToggle = () => {
      if (commandDialog.open) {
        commandDialog.close();
        return;
      }

      commandDialog.showModal();
    };

    const handleCommandClose = () => {
      if (commandDialog.open) {
        commandDialog.close();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        handleCommandToggle();
      }
    };

    const handleDialogClick = (event: MouseEvent) => {
      const bounds = commandDialog.getBoundingClientRect();
      const clickedBackdrop =
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom;

      if (clickedBackdrop) {
        commandDialog.close();
      }
    };

    const handleQuietChaos = () => {
      document.body.classList.toggle("chaos");
      commandDialog.close();
    };

    syncExpandedState();

    document.addEventListener("keydown", handleKeyDown);
    commandButton.addEventListener("click", handleCommandToggle);
    commandDialog.addEventListener("click", handleDialogClick);
    commandDialog.addEventListener("close", syncExpandedState);
    commandDialog.addEventListener("cancel", syncExpandedState);
    document.querySelectorAll("[data-command-link]").forEach((link) => {
      link.addEventListener("click", handleCommandClose);
    });
    quietChaos?.addEventListener("click", handleQuietChaos);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      commandButton.removeEventListener("click", handleCommandToggle);
      commandDialog.removeEventListener("click", handleDialogClick);
      commandDialog.removeEventListener("close", syncExpandedState);
      commandDialog.removeEventListener("cancel", syncExpandedState);
      document.querySelectorAll("[data-command-link]").forEach((link) => {
        link.removeEventListener("click", handleCommandClose);
      });
      quietChaos?.removeEventListener("click", handleQuietChaos);
    };
  }, []);

  return null;
}

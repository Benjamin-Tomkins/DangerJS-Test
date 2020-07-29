import { danger, message, warn, fail } from "danger";

const your_file = danger.git.fileMatch("your_file_path")

if (your_file.edited) {
  message("Please write a data migration to run the changes")
}
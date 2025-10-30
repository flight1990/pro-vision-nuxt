import type {TabItem} from "#/types/albums/TabItem";
import UploadForm from "~/components/albums/forms/UploadForm.vue";
import PhotosForm from "~/components/albums/forms/PhotosForm.vue";
import SettingsForm from "~/components/albums/forms/SettingsForm.vue";

export const tabs: TabItem[] = [
    { title: "Upload files", value: "upload", component: UploadForm },
    { title: "Photos", value: "photos", component: PhotosForm },
    { title: "Settings", value: "settings", component: SettingsForm },
];
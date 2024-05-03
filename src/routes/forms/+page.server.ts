import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request }) => {
        let form = await request.formData();
        let name = form.get("name");
        let email = form.get("email");
        console.log(form, name, email);
    }
};
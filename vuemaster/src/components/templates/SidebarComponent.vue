<template>
	<aside id="sidebar">
		<div id="navBlog" class="sidebarItem" v-if="showCreate">
			<h3>You can</h3>
			<router-link to="/article/create" class="btn btnSuccess">Create Article</router-link>
		</div>
		<div id="search" class="sidebarItem">
			<h3>Searcher</h3>
			<p>Search the article you are looking for</p>
			<Form
				class="midForm"
				@submit="submitSearchForm"
			>
				<div class="formGroup">
					<Field
							name="search"
							id="search"
							as="input"
							rules="required|min:1"
							type="text"
						/>
					<ErrorMessage name="search" as="p">
						The search parameter needs to be at least 1 character
					</ErrorMessage>
				</div>
				<input type="submit" name="submit" value="Search" class="btn" />
			</Form>
		</div>
	</aside>
</template>

<script>
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";

defineRule("required", (value) => {
	if (!value || !value.length) {
		return "This field is required";
	}
	return true;
});

defineRule('min', (value, [limit]) => {
  if (!value || !value.length) {
    return true;
  }
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`;
  }
  return true;
});

export default {
	name: "SidebarComponent",
	components: {
		Form,
		Field,
		ErrorMessage
	},
	props: ['showCreate'],
	methods: {
		submitSearchForm(formData) {
			this.$router.push('/redirect/'+formData.search)
		},
	},
};
</script>

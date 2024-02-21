<template>
	<SliderComponent />
	<div class="center">
		<section id="content">
			<h1 class="subHeader">{{ pageSubtitle }}</h1>
			<Form class="midForm" @submit="submitUserForm">
				<div class="formGroup">
					<label for="firstname">First Name:</label>
					<Field
						name="firstname"
						id="firstname"
						as="input"
						rules="required|min:3"
						type="text"
					/>
					<ErrorMessage name="firstname" as="p">
						The First Name cannot be empty and need to have more
						than 3 characters
					</ErrorMessage>
				</div>

				<div class="formGroup">
					<label for="lastname">Last Name:</label>
					<Field
						name="lastname"
						id="lastname"
						as="input"
						rules="required|min:3"
						type="text"
					/>
					<ErrorMessage name="lastname" as="p" />
				</div>

				<div class="formGroup">
					<label for="lastname">Bio:</label>
					<Field
						name="bio"
						id="bio"
						as="textarea"
						rules="required|min:10"
					/>
					<ErrorMessage name="bio" as="p" />
				</div>

				<div class="formGroup radioButtons">
					<Field
						name="gender"
						type="radio"
						value="male"
						rules="required"
					/>
					Male
					<Field
						name="gender"
						type="radio"
						value="female"
						rules="required"
					/>
					Female
					<Field
						name="gender"
						type="radio"
						value="other"
						rules="required"
					/>
					Other
					<br />
					<ErrorMessage name="gender" as="p" />
				</div>
				<div class="clearfix"></div>

				<input
					type="submit"
					value="Submit"
					class="btn btnSuccess"
					@click="validate"
				/>
			</Form>
		</section>
		<SidebarComponent />
	</div>
</template>

<script>
import SliderComponent from "../templates/SliderComponent.vue";
import SidebarComponent from "../templates/SidebarComponent.vue";
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";

defineRule("required", (value) => {
	if (!value || !value.length) {
		return "This field is required";
	}
	return true;
});

defineRule("min", (value, [limit]) => {
	if (!value || !value.length) {
		return true;
	}
	if (value.length < limit) {
		return `This field must be at least ${limit} characters`;
	}
	return true;
});

export default {
	name: "FormComponent",
	components: {
		SliderComponent,
		SidebarComponent,
		Form,
		Field,
		ErrorMessage,
	},
	data() {
		return {
			pageSubtitle: "Form",
		};
	},
	methods: {
		submitUserForm(values) {
			console.log(values);
		},
	},
};
</script>

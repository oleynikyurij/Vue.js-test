<template>
  <div class="wrap">
    <h3 class="form__title">TELL US ABOUT MISSED HR EVENT</h3>
    <form class="form">
      <p class="form__item">
        <label for="name">Event name</label>
        <input type="text" id="name"
				 />
      </p>
      <p class="form__item">
        <label for="logo">Event logo</label>
        <input type="text" id="logo" />
      </p>
      <p class="form__item">
        <label for="date">Dates</label>
        <input type="text" id="date" />
      </p>
      <p class="form__item">
        <label for="venue">Venue</label>
        <input type="text" id="venue" />
      </p>
      <p class="form__item">
        <label for="city">City</label>
        <input type="text" id="city" />
      </p>
      <p class="form__item">
        <label for="attendes">Attendees</label>
        <input type="text" id="attendes" />
      </p>
      <p class="form__item form__item--last">
        <button type="submit"  class="btn__submint" 
					@click.prevent="submitForm"
				>
					send
        </button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  data() {
    return {
      message: "FORMPAGE"
    };
	},
	methods: {
		submitForm() {
			console.log('click')
		}
	},
	computed: {
		
	}
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 920px;
  width: 100%;
  margin: 20px auto 0;
	padding-bottom: 170px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}
.form {
  &__item {
    display: flex;
    justify-content: space-between;
    padding-left: 56px;
    padding-right: 170px;
    margin-bottom: 10px;
    &.form__item--last {
		    margin-top: 30px;
      justify-content: flex-end;
			.btn__submint {
				display:inline-block;
				padding: 10px 30px;
				color: #ffffff;
				background-color: #ec254d;
				border: none;
        outline: none;
				font-family: Roboto;
				font-size: 16px;
				font-weight: 500;
				line-height: 20px;
				text-transform: uppercase;
				transition: all 0.3s ease-in;
				&:hover {
					background-color: #c85c72;
					border-radius: 4px;
				}
			}
    }
    label {
      width: 20%;
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
      text-align: left;
    }
    input {
      width: 80%;
			height: 30px;
			border: 1px solid #707070;
			outline: none;
			transition: all 0.3s ease-in;
			&:focus {
				border: 1px solid aqua;
			}
    }
  }

  &__title {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-transform: uppercase;
    margin-bottom: 25px;
  }
}
</style>



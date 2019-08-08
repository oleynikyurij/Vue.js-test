<template>
  <footer class="footer">
    <p class="footer__title">
      &copy;
      <span >CONGURU.HR</span>
    </p>
    <ul class="footer__menu">
      <li  class="menu__item">
        <a  class="menu__link">Terms of Service</a>
      </li>
      <li class="menu__item">
        <a  class="menu__link">Privacy Policy</a>
      </li>
      <li class="menu__item">
        <a  class="menu__link">Send Feedback</a>
      </li>
      <li class="menu__item">
        <a  class="menu__link">Help Center</a>
      </li>
      <li class="menu__item">
        <a  class="menu__link">Support</a>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  name: "HeaderBlock",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.footer {
	display: flex;
	justify-content: center;
	margin-bottom: 10px;
	font-size: 12px;
	font-weight: 400;
	line-height: 20px;
	color: #000;

	&__title {
		margin-right: 15px;
		span {
			text-transform: uppercase;
		}
	}
	&__menu {
		display: flex;
		.menu__link {
			position: relative;
			padding: 7px;
			text-decoration: none;
			color: inherit;
			transition:  0.9s ease-in;
			&::before {
				position: absolute;
				display: block;
				content: '';
				width: 1px;
				height: 10px;
				left: 0;
				top: 11px;
				background-color: #000;
			}
			&:hover {
				text-decoration: underline;
			}
		}	
	}
}
</style>


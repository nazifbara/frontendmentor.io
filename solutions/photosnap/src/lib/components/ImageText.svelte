<script lang="ts">
	export let dark = false;
	export let imgPosition: string = 'left';
	export let picture = {
		mobile: '',
		tablet: '',
		desktop: ''
	};
</script>

<article
	class="max-w-[90rem] grid sm:grid-cols-[auto_1fr]"
	class:sm:grid-cols-[1fr_auto]={imgPosition !== 'left'}
	class:dark
>
	<picture class="max-w-[51.875rem] block" class:sm:order-last={imgPosition !== 'left'}>
		<source media="(min-width:1300px)" srcset={picture.desktop} />
		<source media="(min-width:640px)" srcset={picture.tablet} />
		<img src={picture.mobile} alt="" />
	</picture>

	<div class="grid place-content-center bg-bg dark:bg-bgDark">
		<div
			class={`
        px-6 
        py-[4.375rem] 
        flex
        flex-col
        gap-8 
        items-start
        textWrapper
        relative
        before:content-['']
        before:absolute
        before:bg-mainGradientRight
        before:top-0
        before:w-[40%]
        before:h-[0.375rem]
        
        sm:before:bg-mainGradientTop
        sm:before:w-[0.375rem]
        sm:before:h-full
        sm:py-0
        md:px-12
        lg:px-48
        xl:px-28
      `}
			class:dark
			class:sm:before:left-0={imgPosition === 'right'}
			class:sm:before:right-0={imgPosition === 'left'}
		>
			<slot name="heading" />
			<slot name="paragraph" />
			<slot name="link" />
		</div>
	</div>
</article>

<style lang="postcss">
	picture > * {
		width: 100%;
	}

	.textWrapper.dark::before {
		display: block;
	}

	.textWrapper::before {
		display: none;
	}
</style>

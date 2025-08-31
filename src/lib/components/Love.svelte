<script lang="ts">
	import alliLove from './../../lib/assets/images/alli/full-body/alli-full-body-love.png';

	export let userName: string = '';
</script>

<section class="flex flex-col items-center justify-center gap-12 bg-[var(--color-light)] px-6 py-20 md:px-12 lg:px-30">
	<div class="max-w-[680px] text-center flex flex-col gap-5">
		<h3 class="text-2xl font-bold text-[var(--color-secondary)] lg:text-4xl leading-tight">
			Você é um dos primeiros a experimentar o Allify!
		</h3>

		<p class="text-base text-[var(--color-dark)] md:text-lg leading-relaxed">
			Isso significa que você faz parte do grupo mais especial da vida do criador do Allify.
		</p>

		<p class="text-base text-[var(--color-dark)] md:text-lg leading-relaxed">
			Muito obrigado por estar junto nesta jornada!
		</p>

		<p class="italic text-[var(--color-secondary)] text-lg font-medium">
			Vocês me dão força todos os dias!
		</p>
	</div>

	<div class="flex flex-col-reverse items-center gap-6 md:flex-row md:gap-10">
		<img
			src={alliLove}
			alt="Alli love"
			class="max-w-[200px] md:max-w-[260px] drop-shadow-lg"
		/>

		<p class="text-center md:text-left max-w-[480px] text-base text-[var(--color-dark)] md:text-lg leading-relaxed">
			{#if userName.toLowerCase() === 'karla'}
				Olá meu grande amor. Me sinto o homem mais sortudo do mundo por poder dividir a vida com você.  
				Não existe pessoa mais compatível e perfeita que você.  
				Me desculpe pelas minhas falhas e imaturidades. Eu te amo demais!
			{:else if userName.toLowerCase() === 'letícia'}
				Olá Baby. Muito obrigado por ser a melhor irmã que eu sempre sonhei em ter.  
				Você é uma pessoa incrível e eu te amo demais!
			{:else if userName.toLowerCase() === 'sandra'}
				Olá mãezinha linda. Obrigado por cuidar tão bem de mim e dos meus irmãos.  
				Eu te escolheria como mãe em todas as vidas que eu tivesse. Te amo infinito!
			{:else if userName.toLowerCase() === 'filipe'}
				Olá meu irmãozinho. Eu te amo demais!  
				Estarei sempre contigo pro que der e vier.  
				Conte comigo para tudo, sempre!
			{:else if userName.toLowerCase() === 'estefani'}
				Olá padrinho. Vi que reprovou em 5 matérias... precisa estudar, ein!  
				Brincadeiras à parte, eu te amo muito e estou de olho em você.
			{:else}
				Seja bem-vindo(a), {userName || 'amigo(a)'}!  
				É incrível ter você aqui comigo nessa jornada.
			{/if}
		</p>
	</div>
</section>


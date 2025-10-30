// Web Audio setup
const AudioContextClass = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContextClass({latencyHint: 'interactive'})

// Map of audio element id
const noteBuffers = new Map()

/* Change audio in raw binary to audio buffer that can be play */
async function loadAudioBuffer(url) {
	const resp = await fetch(url)
	// arratyBuffer() reads the body of the response as raw binary data
	const arrayBuffer = await resp.arrayBuffer()
	// takes that binary buffer and decodes it into an AudioBuffer that the Web Audio API can understand and play.
	return await audioCtx.decodeAudioData(arrayBuffer)
}

async function preloadAllNotes() {
	const audioEls = document.querySelectorAll('audio[id]')
	const promises = Array.from(audioEls).map(async el=>{
		const id = el.id
		const src = el.currentSrc || el.src
		if (!src) return
		try {
			const buffer = await loadAudioBuffer(src)
			noteBuffers.set(id, buffer)
		} catch (err) {
			console.warn('Failed to load', id, src, err)
		}
	})
	await Promise.all(promises)
	console.log('Preloaded notes: ', noteBuffers.size)
}

function playNoteById(noteId) {
	// Retrieve from map
	const buffer = noteBuffers.get(noteId)
	if (!buffer) {
		const el = document.getElementById(noteId)
		if (el) {
			el.currentTime = 0;
			el.play().catch(()=>{})
		}
		return
	}

	const src = audioCtx.createBufferSource()
	src.buffer = buffer

	const gain = audioCtx.createGain()
	gain.gain.value = 1.0

	src.connect(gain).connect(audioCtx.destination)
	src.start()
}

function unlockAudioOnFirstGesture() {
	const resume = async () => {
		if (audioCtx.state === 'suspended') {
			try {
				await audioCtx.resume()
				console.log('AudioContex resumed')
			} catch (e) {console.warn('resume failed', e)}
		}
		window.removeEventListener('pointerdown', resume)
	}
	window.addEventListener('pointerdown', resume, {once: true})
}

function attachKeyHandlers() {
	const keys = document.querySelectorAll('.key')
	keys.forEach(key=>{
		key.addEventListener('pointerdown', (e)=> {
			key.classList.add('active')
			const noteId = key.dataset.note
			playNoteById(noteId)
		})

		key.addEventListener('pointerup', () => key.classList.remove('active'));
		key.addEventListener('pointercancel', () => key.classList.remove('active'));
		key.addEventListener('pointerleave', () => key.classList.remove('active'));
	})
}

unlockAudioOnFirstGesture();
attachKeyHandlers();
preloadAllNotes().catch(e => console.warn('preload failed', e));
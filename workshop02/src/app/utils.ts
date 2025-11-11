export const rnd = (range = 14, total = 4) => {
	const nums = []

	for (let i = 0; i < range; i++)
		nums.push(i)

	for (let i = 0; i < range; i++) {
		const idx = Math.floor(Math.random() * range)
		const t: number = nums[i]
		nums[i] = nums[idx]
		nums[idx] = t
	}

	return nums.splice(0, total)
}


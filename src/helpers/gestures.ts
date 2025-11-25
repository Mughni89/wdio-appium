export async function swipeLeft() {
    const { width, height } = await driver.getWindowRect();
    const startX = width * 0.8;
    const endX = width * 0.2;
    const y = height * 0.5;

    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: startX, y },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 200 },
            { type: 'pointerMove', duration: 600, x: endX, y },
            { type: 'pointerUp', button: 0 },
        ],
    }]);

    await driver.pause(1000);
}

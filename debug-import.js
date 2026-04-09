try {
    const server = await import('./dist/server/entry-server.js');
    console.log('Success!', Object.keys(server));
} catch (e) {
    console.error('FAILED TO IMPORT:');
    console.error(e);
}

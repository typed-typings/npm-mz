
import * as fs from 'mz/fs';

fs.exists(__filename).then((exists: boolean) => {
    // whatever
});

async function doSomething() {
    if (await fs.exists(__filename)) {
        // whatever
    }
}

doSomething();

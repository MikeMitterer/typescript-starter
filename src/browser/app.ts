import { LoggerFactory } from '@mmit/logging'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import lambi from '../site/images/lambi.png'
import { testMUnit } from './test/muni.test'
import * as muni from '@mmit/muni'
import logo from '@mmit/styles/images/logo.png'
import { addLogoIcon } from '@mmit/styles'

const query = (selector: string): HTMLElement => document.querySelector(selector) as HTMLElement

// Retrieve a logger (you can decide to use it per class and/or module or just
// export it in the config above etc. Your loggers - your choice!).
// This logger will fall in the first LogGroupRule from above.
const logger = LoggerFactory.getLogger('main')

export async function main(): Promise<void> {
    query('#tstest').onclick = async (event: MouseEvent): Promise<void> => {
        const now = format(Date.now(), 'yyyy.MM.dd HH:mm', {
            locale: de
        })

        alert(`Hi Mike, event '${event.type}' occurred at ${now}!`)
    }

    const divs = Array.from(document.getElementsByTagName('div'))

    divs.forEach((div: HTMLDivElement): void => {
        div.addEventListener('click', (evt: MouseEvent): void => {
            evt = new MouseEvent('aaa')
            logger.info(JSON.stringify(evt))
        })
    })

    logger.debug(`Lambi: ${JSON.stringify(lambi)}`)
    const img = query('#frontImg') as HTMLImageElement
    img.src = lambi

    const body = query('body') as HTMLBodyElement
    body.classList.remove('loading')
    body.classList.add('loaded')

    addLogoIcon(logo)

    muni.resetIndicator()

    await Promise.all([
        await testMUnit(),
    ])

    muni.setIndicatorTo(muni.errors === 0, { onError: () => {
            logger.error(`Unit-Tests failed with #${muni.errors} error(s)!`)
    }})

    // logger.info(`Done!!!! ${os.platform()}`);
    logger.info(`Done!!`)
}

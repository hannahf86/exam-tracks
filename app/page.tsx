// ICONS
import { FaGuitar } from 'react-icons/fa'
import { MdOutlinePiano } from 'react-icons/md'
import { GiFlute } from 'react-icons/gi'

// COMPONENTS
import TrackCard from './Components/TrackCard/page'


export default function Home() {

  const styles = {
    title: 'flex text-5xl justify-center pt-16 text-[#4A4873] font-bold',
    subtitle: 'text-xl text-center pt-16 text-[#4A4873] font-bold',
    instrumentContainer: 'mx-12 flex justify-center mt-6',
    instrumentItem: 'bg-white rounded-lg p-4 flex justify-center my-2 mx-4 text-[#4A4873] hover:bg-[#4A4873] hover:text-white',
    dropDownContainer: 'flex justify-center mt-6',
    dropDown: 'px-6 py-2 rounded-lg'
  }

  return (
    <>
      <main >
        <h1 className={styles.title}>EXAM TRACKS</h1>

        <h2 className={styles.subtitle}>Choose an instrument</h2>

        <div className={styles.instrumentContainer}>
          <div className={styles.instrumentItem}>
            <FaGuitar size={50} />
          </div>

          <div className={styles.instrumentItem}>
            <MdOutlinePiano size={50} />
          </div>

          <div className={styles.instrumentItem}>
            <GiFlute size={50} />
          </div>
        </div>

        <div>
          <h2 className={styles.subtitle}>Select a grade</h2>
          <form className={styles.dropDownContainer}>
            <select className={styles.dropDown}>
              <option value='Grade 3'>Classical Guitare Grade 2</option>
              <option value='Grade 3'>Classical Guitare Grade 3</option>
            </select>
          </form>
        </div>


        <h2 className={styles.subtitle}>Results</h2>
        <div className='mt-8'>
          <TrackCard />
        </div>

        <div className='mt-8'>
          <TrackCard />
        </div>

        <div className='mt-8'>
          <TrackCard />
        </div>

        <div className='mt-8'>
          <TrackCard />
        </div>
      </main>

      <div className='flex justify-center'>
        <button className='bg-[#4A4873] text-white p-4 rounded-lg my-8'>
          Reset Results
        </button>
      </div>
    </>
  )
}

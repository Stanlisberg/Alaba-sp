import Image from "next/image";
import styles from "./style.module.scss";

const NoData = () => {
  return (
    <div className={styles.NoData}>
      <div className={styles.ImageContainer}>
        <Image
          src={
            "https://res.cloudinary.com/dbg2z1svm/image/upload/v1701181948/ibx-web-application/noto_data_ot8tja.svg"
          }
          alt="no-data"
          width={124}
          height={100}
        />
      </div>
      <div className={styles.Message}>
        {/* <span>No Data Retrieved</span> */}
        <h5>
          Whoops! No Customer Data Currently <br /> Available.
        </h5>
      </div>
    </div>
  );
};

export default NoData;

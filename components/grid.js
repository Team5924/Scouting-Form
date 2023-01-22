import { useEffect, useState } from "react";
import styles from "@/styles/grid.module.css";
import Cone from "./grid-components/cone";
import Cube from "./grid-components/cube";
import Checkbox from "./grid-components/checkbox";

export default function Grid(props) {
    const [isDisable, setIsDisable] = useState([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);

    function handleDisable(disable, row, column) {
        const disableCopy = isDisable;

        if (row == "botCone") { // if row is "botCone" set "botCube" to be disabled
            disableCopy[column][1] = disable;
        }
        if (row == "botCube") { // if row is "botCube" set "botCone" to be disabled
            disableCopy[column][0] = disable;
        }

        setIsDisable(disableCopy);
    }

    useEffect(() => {
        return () => {
            setIsDisable([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
        }
    }, [props.clear])
    

    return (
        <>
            <div className={styles.grid}>
                {/* LABELS */}
                <div className={styles.gridItem}></div>
                <div className={[styles.gridItem, styles.grid1].join(" ")}>
                    Grid
                </div>
                <div className={[styles.gridItem, styles.coopGrid].join(" ")}>
                    Co-Op Grid
                </div>
                <div className={[styles.gridItem, styles.grid2].join(" ")}>
                    Grid
                </div>
                {/* ##### TOP ROW ##### */}
                <div className={styles.gridItem}>
                    Top
                </div>
                <div className={[styles.gridItem, styles.cone].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"top"} column={0} clear={props.clear} />
                </div>
                <div className={[styles.gridItem, styles.cube].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"top"} column={1} clear={props.clear} />   
                </div>
                <div className={[styles.gridItem, styles.cone].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"top"} column={2} clear={props.clear} />
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"top"} column={3} clear={props.clear} />
                </div>
                <div className={[styles.gridItem, styles.cube].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"top"} column={4} clear={props.clear} />
                </div>
                <div className={styles.gridItem}>   
                    <Checkbox handleCheckbox={props.handleScore} row={"top"} column={5} clear={props.clear} />
                </div>
                <div className={[styles.gridItem, styles.cone].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"top"} column={6} clear={props.clear} />
                </div>
                <div className={[styles.gridItem, styles.cube].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"top"} column={7} clear={props.clear} />
                </div>
                <div className={[styles.gridItem, styles.cone].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"top"} column={8} clear={props.clear} />
                </div>
                {/* ##### MID ROW ##### */}
                <div className={styles.gridItem}>
                    Mid
                </div>
                <div className={[styles.gridItem, styles.cone].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"mid"} column={0} clear={props.clear} />
                </div>
                <div className={[styles.gridItem, styles.cube].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"mid"} column={1} clear={props.clear} />   
                </div>
                <div className={[styles.gridItem, styles.cone].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"mid"} column={2} clear={props.clear} />
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"mid"} column={3} clear={props.clear} />
                </div>
                <div className={[styles.gridItem, styles.cube].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"mid"} column={4} clear={props.clear} />
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"mid"} column={5} clear={props.clear} />
                </div>
                <div className={[styles.gridItem, styles.cone].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"mid"} column={6} clear={props.clear} />
                </div>
                <div className={[styles.gridItem, styles.cube].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"mid"} column={7} clear={props.clear} />
                </div>
                <div className={[styles.gridItem, styles.cone].join(" ")}>
                    <Checkbox handleCheckbox={props.handleScore} row={"mid"} column={8} clear={props.clear} />
                </div>
                {/* ##### BOT (Cones) ROW ##### */}
                <div className={styles.gridItem}>
                    Bot&nbsp;<Cone />
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCone"} column={0} clear={props.clear} isDisable={isDisable[0]} handleDisable={handleDisable} />
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCone"} column={1} clear={props.clear} isDisable={isDisable[1]} handleDisable={handleDisable}/>   
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCone"} column={2} clear={props.clear} isDisable={isDisable[2]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCone"} column={3} clear={props.clear} isDisable={isDisable[3]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCone"} column={4} clear={props.clear} isDisable={isDisable[4]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCone"} column={5} clear={props.clear} isDisable={isDisable[5]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCone"} column={6} clear={props.clear} isDisable={isDisable[6]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCone"} column={7} clear={props.clear} isDisable={isDisable[7]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCone"} column={8} clear={props.clear} isDisable={isDisable[8]} handleDisable={handleDisable}/>
                </div>
                {/* ##### BOT (Cubes) Row ##### */}
                <div className={styles.gridItem}>
                    Bot&nbsp;<Cube />
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCube"} column={0} clear={props.clear} isDisable={isDisable[0]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCube"} column={1} clear={props.clear} isDisable={isDisable[1]} handleDisable={handleDisable}/>   
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCube"} column={2} clear={props.clear} isDisable={isDisable[2]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCube"} column={3} clear={props.clear} isDisable={isDisable[3]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCube"} column={4} clear={props.clear} isDisable={isDisable[4]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCube"} column={5} clear={props.clear} isDisable={isDisable[5]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCube"} column={6} clear={props.clear} isDisable={isDisable[6]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCube"} column={7} clear={props.clear} isDisable={isDisable[7]} handleDisable={handleDisable}/>
                </div>
                <div className={styles.gridItem}>
                    <Checkbox handleCheckbox={props.handleScore} row={"botCube"} column={8} clear={props.clear} isDisable={isDisable[8]} handleDisable={handleDisable}/>
                </div>
            </div>
        </>
    )
}
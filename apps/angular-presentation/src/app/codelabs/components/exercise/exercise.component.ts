import { Compiler, Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { convertExerciseToMap } from '../../../../../../../ng2ts/ng2ts';


export function extractSolutions(files: any[]) {
  return files.reduce((result, file) => {
    if (file.solution) {
      result[file.path] = file.solution;
    }

    return result;
  }, {});
}

@Component({
  selector: 'slides-codelab-exercise',
  templateUrl: 'exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodelabExerciseComponent),
      multi: true
    }
  ],
})
export class CodelabExerciseComponent {
  @Input() bootstrapTest;
  @Input() milestone = '';
  @Input() url = '';
  @Input() translations = {};
  @Input() slidesSimpleHighlightMatch = [];
  code: any;
  solutions = {};
  filesConfig: any;
  private file: string;
  private bootstrap: string;
  private runFilesMap: any;
  private files: string[];

  constructor(private compiler: Compiler, private injector: Injector) {
  }

  @Input() set exercise(exercise) {
    const map = convertExerciseToMap(exercise);
    this.code = map.code;
    this.bootstrap = map.bootstrap;
    this.bootstrapTest = map.bootstrapTest;
    this.file = exercise.files[0].path;
    this.filesConfig = exercise;
    this.solutions = extractSolutions(this.filesConfig.files);
    this.update(this.code);
  };

  buildFileMap(files: any[]) {
    return files.reduce((result, file) => {

      result[file.path] = (file.before || '') + ' \n ' + this.code[file.path] + ' \n ' + (file.after || '');

      if (file.execute) {
        result[file.path + '_execute'] = file.execute;
      }

      return result;
    }, {});
  }

  update(code: string) {
    // // WebWorker
    // // timeout 3 sec
    //
    // @Component({selector: 'lol'})
    // class DynamicComponent {
    // }
    //
    // @NgModule({declarations: [DynamicComponent]})
    // class DynamicModule {
    // }
    //
    // const moduleFactory: ModuleWithComponentFactories<DynamicModule> = this.compiler.compileModuleAndAllComponentsSync(DynamicModule);
    // const moduleRef: NgModuleRef<DynamicModule> = moduleFactory.ngModuleFactory.create(this.injector);
    //
    // moduleRef.componentFactoryResolver;

    this.code = code;
    const runFilesMap = this.buildFileMap(this.filesConfig.files);

    const needsUpdate = (!this.runFilesMap) || Object.keys(runFilesMap).some(key => this.runFilesMap[key] !== runFilesMap[key]);

    if (needsUpdate) {
      this.runFilesMap = runFilesMap;
      this.files = Object.keys(this.runFilesMap);
    }

  }

}


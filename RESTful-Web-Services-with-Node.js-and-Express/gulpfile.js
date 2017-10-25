var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'), 
   gulpMocha = require('gulp-mocha'),
     env = require('gulp-mocha'),
      supertest = require('supertest');

gulp.task('default',function(){
    nodemon({
        script:'app.js',
        ext:'js',
        env:{
            port:8000
        },
        ignore:['./node_modules/**']
    })
    .on('restart',function(){
        console.log('server running on');
    });

});

gulp.task('test',function(){
    env({vars:{ENV:'Test'}});           
    gulp.src('tests/*.js',{read:false})
    .pipe(gulpMocha({reporter:'nyan'}))
});
